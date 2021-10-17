import { handleButtonClicked } from './dom.js';

export function onFormClick(event) {
  const value = event.target.value;
  if (value) handleButtonClicked(value);
}
