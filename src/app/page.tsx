'use client'
import React, {useState} from 'react';
import {ThemeSwitcher} from "@/components/themaSwicher";
import Search from "@/components/search";
import DomainInfo from "@/components/domainInfo";
import {DomainInfo as DomainInfoType} from "@/types/domain/domainInfo";

function App() {
    const [DomainInfos, setDomainInfos] = useState<DomainInfoType[] | null>(null);
    return (
        <div className={"min-h-screen"}>
            <div className={"flex"}>
                <Search setDomainInfo={setDomainInfos}/>
                <ThemeSwitcher/>
            </div>
            <DomainInfo domainInfos={DomainInfos}/>
        </div>
    );
}

export default App;
