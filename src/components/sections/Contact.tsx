import { Component, useContext, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { Copy, Email, Telephone, Copied, Github, Twitter, LinkedIn } from "../Icons";
import { MeContext } from "../../contexts/meContext";
import { Me } from "../../types";

export function Contact({}) {
    const mode = useContext(ModeContext);
    const me = useContext(MeContext) as Me;

    return (
        <section id="contact" className="bg-grey-light-default px-28 py-24 flex flex-col gap-12 items-center">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 px-5 py-1 text-body-3-all text-grey-light-600 self-center">Get in touch</span>
                <p className="text-subtitle-all text-grey-light-600 max-w-[600px]">What’s next? Feel free to reach out to me if you're looking for a developer, have an inquiry, or simply want to connect.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-5">
                    <Email mode={mode} />
                    <span className="text-heading-2-desktop font-semibold text-grey-light-900">{me.email}</span>
                    <CopyButton content={me.email} />
                </div>
                <div className="flex gap-5">
                    <Telephone mode={mode} />
                    <span className="text-heading-2-desktop font-semibold text-grey-light-900">{me.phoneNumber}</span>
                    <CopyButton content={me.phoneNumber} />
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="text-body-2-all text-grey-light-600">You may also find me on these platforms!</span>
                <div className="flex gap-1">
                    <a href={me.github} target="_blank" rel="noopener noreferrer">
                        <Github mode={mode} />
                    </a>
                    <a href={me.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter mode={mode} />
                    </a>
                    <a href={me.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn mode={mode} />
                    </a>
                </div>
            </div>
        </section>
    );
}

function CopyButton({content}: {content: string}) {
    const mode = useContext(ModeContext);
    const [isCopied, setIsCopied] = useState(false);

    async function copy(content: string) {
        try {
            await navigator.clipboard.writeText(content);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 4000);
        } catch (e) {
            alert('Couldn\'t copy');
        }
    }
    return (
        <button type="button" onClick={() => copy(content)} >
            {
                isCopied ?
                <Copied mode={mode} /> :
                <Copy mode={mode} />
            }
        </button>
    );
}