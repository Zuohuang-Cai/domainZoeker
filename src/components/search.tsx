import React, {useState} from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import {searchDomains} from "@/utils/domain";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Search({setDomainInfo: setDomainInfo}: { setDomainInfo: any }) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };
    const handleSearch = async () => {
        try {
            const data = await searchDomains(inputValue);
            setDomainInfo(data.results[0]);
        } catch (e: any) {
            toast.error(`Invalid extension`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const handleKeyDown = async (event: { key: string; }) => {
        if (event.key === 'Enter') {
            await handleSearch();
        }
    };
    return (
        <Input
            label="Search"
            isClearable
            radius="lg"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focus=true]:bg-default-200/50",
                    "dark:group-data-[focus=true]:bg-default/60",
                    "!cursor-text",
                ],
            }}
            placeholder="Type to search..."
            startContent={
                <SearchIcon
                    onClick={async () => await handleSearch()}
                    className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 cursor-pointer flex-shrink-0"/>
            }
        />

    );
}
