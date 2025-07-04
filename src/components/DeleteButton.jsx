import { h } from 'preact';

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
};

export default DeleteButton;
