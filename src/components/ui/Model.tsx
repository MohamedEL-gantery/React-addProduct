/* eslint-disable react-refresh/only-export-components */
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, memo } from "react";

interface IProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
}

const Modal = ({ children, close, isOpen, title, description }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 backdrop-blur-sm " aria-hidden="true" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black"
                >
                  {title}
                </DialogTitle>
              )}
              {description && (
                <p className="mt-2 text-sm/6 text-gray-500">{description}</p>
              )}
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default memo(Modal);
