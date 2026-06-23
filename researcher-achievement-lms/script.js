const data = window.ACHIEVEMENT_DATA || { totalFiles: 0 };
const totalFiles = document.querySelector("#totalFiles");

if (totalFiles) {
  totalFiles.textContent = data.totalFiles.toLocaleString("ko-KR");
}
