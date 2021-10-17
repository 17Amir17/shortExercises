import { handleButtonClicked } from "./dom";

export function onFormClick(event) {
  const value = event.target.value;
  if (value) handleButtonClicked(value);
}
