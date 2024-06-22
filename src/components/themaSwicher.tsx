"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {DropdownItem, Switch} from "@nextui-org/react";
import {MoonIcon, SunIcon} from "@nextui-org/shared-icons";
import Car from "@/components/car";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex flex-col items-center space-y-2 border rounded-md">
            <Car/>
            <Switch isSelected={theme === "dark"}
                    size="sm"
                    thumbIcon={({isSelected, className}) =>
                        isSelected ? (
                            <MoonIcon className={className}/>
                        ) : (
                            <SunIcon className={className}/>
                        )
                    } onValueChange={(e) => setTheme(e ? "dark" : "light")}/>
        </div>
    )
};