(function () {
  function getFileName(link) {
    const explicit = link.getAttribute("download");
    if (explicit && explicit !== "") return explicit;
    const path = new URL(link.href, window.location.href).pathname;
    return decodeURIComponent(path.split("/").pop() || "course-material.pdf");
  }

  async function downloadPdf(link) {
    const response = await fetch(link.href, { cache: "no-store" });
    if (!response.ok) throw new Error("PDF file not found");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = getFileName(link);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  document.addEventListener("click", async (event) => {
    const link = event.target.closest('a.download-link[href$=".pdf"]');
    if (!link) return;
    event.preventDefault();

    const originalText = link.textContent;
    link.textContent = "PDF 다운로드 중...";
    link.setAttribute("aria-busy", "true");
    link.style.pointerEvents = "none";

    try {
      await downloadPdf(link);
    } catch (error) {
      window.open(link.href, "_blank", "noopener");
    } finally {
      link.textContent = originalText;
      link.removeAttribute("aria-busy");
      link.style.pointerEvents = "";
    }
  });
}());
