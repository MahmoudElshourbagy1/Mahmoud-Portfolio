import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location.js";
import { locations } from "#constants";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const {openWindow}=useWindowStore()
    const { activeLocation, setActiveLocation } = useLocationStore();
    const openItem = (item) => {
        if(item.fileType==="pdf") return openWindow("resume")
        if (item.kind ==="folder") return setActiveLocation(item);
        if(["fig","url"].includes(item.fileType)&& item.href) return  window.open(item.href , "_blank");
        openWindow(`${item.fileType}${item.kind}`,item);
    }

    const renderList = (items, name) => (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            "flex items-center gap-2 p-2 cursor-pointer rounded",
                            item.id === activeLocation?.id ? "bg-blue-100" : "hover:bg-gray-100"
                        )}
                    >
                        <img src={item.icon} alt={item.name} className="w-4 h-4" />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header" className="flex items-center justify-between p-2">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar p-2 w-60 overflow-auto">
                    {renderList(Object.values(locations), "Favorites")}
                    {renderList(locations.work.children, "My Projects")}
                </div>
                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li key={item.id}
                        className={item.position}
                        onClick={()=>openItem(item)}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
