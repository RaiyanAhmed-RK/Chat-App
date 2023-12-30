import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon.jsx';
import { LockIcon } from './LockIcon.jsx';

export default function SignUpButton({ name }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div >
                <Button onPress={onOpen} color="primary" variant="shadow" className='hover:bg-transparent hover:text-primary m-3'>{name}</Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                    className="dark text-foreground bg-background "
                >
                    <ModalContent className="border">
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                                <ModalBody>
                                    <div className="flex  gap-1">
                                        <Input
                                            autoFocus
                                            label="First Name"
                                            placeholder="First name"
                                            variant="bordered"
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="Last name"
                                            variant="bordered"
                                        />
                                    </div>
                                    <Input
                                        label="Username"
                                        placeholder="Choose your Username"
                                        variant="bordered"
                                    />
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                    />
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Confirm your password"
                                        type="password"
                                        variant="bordered"
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link color="primary" href="#" size="sm">
                                            Having trouble?
                                        </Link>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Sign Up
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
