"use client";

import { createPortal } from "react-dom";
import { useEffect,useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);

  const onHideModal = () => {
    router.back();
  };
  
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHideModal}
       className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-gray-500 dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHideModal}
          className="flex justify-end cursor-pointer">
            <Image
              src="/xmark.svg"
              alt="close"
              width={30}
              height={30} />
          </span>
      {children}
    </dialog>,
    document.getElementById("modal-content")
  )
}

export default Modal