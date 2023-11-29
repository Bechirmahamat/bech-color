import React from "react";
import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
const Forms = () => {
    const [color, setColor] = useState("#094c62");

    const updateColor = (e) => {
        try {
            const newColor = e.target.value;
            setColor(newColor);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [colorList, setColorList] = useState(new Values("#094c62").all(10));
    const GenerateColor = (e) => {
        e.preventDefault();
        try {
            const newColor = new Values(color).all(10);
            setColorList(newColor);
        } catch (error) {
            toast.error(error.message);
        }
    };
    const copyItem = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText("#" + color);
                toast.success("Color copied successfully");
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error("ClipBoard not allowed here");
        }
    };

    return (
        <>
            <ToastContainer position="top-center" />

            <div className="header">
                <h2 className="mr-1"> Color Generator</h2>
                <div>
                    <form className="wrapper" onSubmit={GenerateColor}>
                        <div>
                            <input
                                type="color"
                                className="color-class"
                                value={color}
                                onChange={updateColor}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                value={color}
                                placeholder="#f8a892"
                                onChange={updateColor}
                            />
                            <IoCopyOutline
                                className="absolute"
                                onClick={copyItem}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ background: color }}
                        >
                            Generate
                        </button>
                    </form>
                </div>
            </div>
            <div className="content">
                {colorList.map((color, index) => (
                    <SingleColor key={nanoid()} color={color} index={index} />
                ))}
            </div>
        </>
    );
};

export default Forms;
