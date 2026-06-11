(function () {
  const pageWidthPt = 595.28;
  const pageHeightPt = 841.89;
  const canvasWidth = 1240;
  const canvasHeight = 1754;
  const margin = 92;
  const lineHeight = 34;

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach((word) => {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width <= maxWidth) {
        line = test;
      } else {
        if (line) lines.push(line);
        line = word;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  function parseMarkdown(markdown) {
    const blocks = [];
    markdown.split(/\r?\n/).forEach((raw) => {
      const line = raw.trim();
      if (!line) {
        blocks.push({ type: "space", text: "" });
      } else if (line.startsWith("# ")) {
        blocks.push({ type: "title", text: line.slice(2) });
      } else if (line.startsWith("## ")) {
        blocks.push({ type: "heading", text: line.slice(3) });
      } else if (/^[-*]\s+/.test(line)) {
        blocks.push({ type: "bullet", text: line.replace(/^[-*]\s+/, "") });
      } else if (/^\d+\.\s+/.test(line)) {
        blocks.push({ type: "bullet", text: line.replace(/^\d+\.\s+/, "") });
      } else {
        blocks.push({ type: "body", text: line });
      }
    });
    return blocks;
  }

  function newPage() {
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#14746f";
    ctx.fillRect(0, 0, canvasWidth, 22);
    ctx.fillStyle = "#5b6570";
    ctx.font = "24px 'Segoe UI', 'Malgun Gothic', sans-serif";
    ctx.fillText("전공탐구생활 온라인 수업강의실 · 2026학년도 1학기", margin, canvasHeight - 58);
    return { canvas, ctx, y: margin };
  }

  function renderMarkdown(markdown) {
    const pages = [];
    let page = newPage();
    pages.push(page);

    function ensure(space) {
      if (page.y + space > canvasHeight - 120) {
        page = newPage();
        pages.push(page);
      }
    }

    function drawLines(lines, options) {
      const { font, color, indent = 0, before = 0, after = 0, bullet = false } = options;
      ensure(before + lines.length * lineHeight + after);
      page.y += before;
      page.ctx.font = font;
      page.ctx.fillStyle = color;
      lines.forEach((line) => {
        if (bullet) page.ctx.fillText("•", margin + indent, page.y);
        page.ctx.fillText(line, margin + indent + (bullet ? 30 : 0), page.y);
        page.y += lineHeight;
      });
      page.y += after;
    }

    parseMarkdown(markdown).forEach((block) => {
      const max = canvasWidth - margin * 2;
      if (block.type === "space") {
        ensure(18);
        page.y += 18;
      } else if (block.type === "title") {
        page.ctx.font = "bold 42px 'Segoe UI', 'Malgun Gothic', sans-serif";
        drawLines(wrapText(page.ctx, block.text, max), {
          font: "bold 42px 'Segoe UI', 'Malgun Gothic', sans-serif",
          color: "#0b4f4b",
          before: 10,
          after: 24
        });
      } else if (block.type === "heading") {
        page.ctx.font = "bold 28px 'Segoe UI', 'Malgun Gothic', sans-serif";
        drawLines(wrapText(page.ctx, block.text, max), {
          font: "bold 28px 'Segoe UI', 'Malgun Gothic', sans-serif",
          color: "#172026",
          before: 24,
          after: 10
        });
      } else if (block.type === "bullet") {
        page.ctx.font = "24px 'Segoe UI', 'Malgun Gothic', sans-serif";
        drawLines(wrapText(page.ctx, block.text, max - 50), {
          font: "24px 'Segoe UI', 'Malgun Gothic', sans-serif",
          color: "#172026",
          indent: 18,
          before: 4,
          after: 4,
          bullet: true
        });
      } else {
        page.ctx.font = "24px 'Segoe UI', 'Malgun Gothic', sans-serif";
        drawLines(wrapText(page.ctx, block.text, max), {
          font: "24px 'Segoe UI', 'Malgun Gothic', sans-serif",
          color: "#172026",
          before: 4,
          after: 6
        });
      }
    });

    return pages.map((p) => p.canvas);
  }

  function dataUrlToBytes(dataUrl) {
    const base64 = dataUrl.split(",")[1];
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  function textBytes(text) {
    return new TextEncoder().encode(text);
  }

  function buildPdf(jpegs) {
    const chunks = [];
    const offsets = [];
    let length = 0;
    const add = (part) => {
      const bytes = typeof part === "string" ? textBytes(part) : part;
      chunks.push(bytes);
      length += bytes.length;
    };
    const object = (number, parts) => {
      offsets[number] = length;
      add(`${number} 0 obj\n`);
      parts.forEach(add);
      add("\nendobj\n");
    };

    add("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
    const pageObjects = jpegs.map((_, index) => 3 + index * 3);
    object(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
    object(2, [`<< /Type /Pages /Kids [${pageObjects.map((n) => `${n} 0 R`).join(" ")}] /Count ${jpegs.length} >>`]);

    jpegs.forEach((jpeg, index) => {
      const pageObj = 3 + index * 3;
      const imageObj = pageObj + 1;
      const contentObj = pageObj + 2;
      const imageName = `Im${index + 1}`;
      const content = `q\n${pageWidthPt} 0 0 ${pageHeightPt} 0 0 cm\n/${imageName} Do\nQ`;
      object(pageObj, [`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidthPt} ${pageHeightPt}] /Resources << /XObject << /${imageName} ${imageObj} 0 R >> >> /Contents ${contentObj} 0 R >>`]);
      offsets[imageObj] = length;
      add(`${imageObj} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvasWidth} /Height ${canvasHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`);
      add(jpeg);
      add("\nendstream\nendobj\n");
      object(contentObj, [`<< /Length ${content.length} >>\nstream\n${content}\nendstream`]);
    });

    const xref = length;
    const maxObj = 2 + jpegs.length * 3;
    add(`xref\n0 ${maxObj + 1}\n0000000000 65535 f \n`);
    for (let i = 1; i <= maxObj; i += 1) add(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
    add(`trailer\n<< /Size ${maxObj + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
    return new Blob(chunks, { type: "application/pdf" });
  }

  async function downloadAsPdf(link) {
    const response = await fetch(link.href, { cache: "no-store" });
    if (!response.ok) throw new Error("download source not found");
    const markdown = await response.text();
    const canvases = renderMarkdown(markdown);
    const jpegs = canvases.map((canvas) => dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92)));
    const blob = buildPdf(jpegs);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const name = (link.getAttribute("href").split("/").pop() || "course-material.md").replace(/\.md$/i, ".pdf");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  document.addEventListener("click", async (event) => {
    const link = event.target.closest('a.download-link[href$=".md"]');
    if (!link) return;
    event.preventDefault();
    const original = link.textContent;
    link.textContent = "PDF 생성 중...";
    link.style.pointerEvents = "none";
    try {
      await downloadAsPdf(link);
    } catch (error) {
      window.location.href = link.href;
    } finally {
      link.textContent = original;
      link.style.pointerEvents = "";
    }
  });
}());
