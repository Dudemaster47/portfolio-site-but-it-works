import "./modal.css";

const Modal = ({ children, show, onClose, title }) => {
    return (
        show && (
            <>
                <div className="modalBackdrop" onClick={onClose} />
                <div className="modalWrapper">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <div onClick={onClose} className="modalClose">
                                X
                            </div>
                        </div>
                        <div className="modalBody">{children}</div>
                    </div>
                </div>
            </>
        )
    )
}

export default Modal;