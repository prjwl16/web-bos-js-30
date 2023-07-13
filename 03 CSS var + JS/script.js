var inputs = document.querySelectorAll(".controls input");
function handleValueChange() {
  const suffix = this.dataset.sizing || "";
  console.log(this.value);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("input", handleValueChange);
  input.addEventListener("mousemove", handleValueChange);
});
