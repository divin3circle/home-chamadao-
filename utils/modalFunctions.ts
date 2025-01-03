export function openModal(modalId: string) {
  const modal = document.getElementById(modalId) as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  } else {
    console.error(`Modal with id ${modalId} not found.`);
  }
}

export function closeModal(modalId: string) {
  const modal = document.getElementById(modalId) as HTMLDialogElement;
  if (modal) {
    modal.close();
  } else {
    console.error(`Modal with id ${modalId} not found.`);
  }
}
