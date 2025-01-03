function JoinModal({
  joinModal,
  setJoinModal,
}: {
  joinModal: boolean;
  setJoinModal: (joinModal: boolean) => void;
}) {
  return (
    <div className="z-10 top-10 backdrop-blur-2xl">
      <div>
        <h1>Hello Modal</h1>.
        <button onClick={() => setJoinModal(!joinModal)}>Close</button>
      </div>
    </div>
  );
}

export default JoinModal;
