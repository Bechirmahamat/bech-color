import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
    const { weight, type, hex } = color;
    const selectPlaceBoard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText("#" + hex);
                toast.success("Color copied successfully");
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error("ClipBoard not allowed here");
        }
    };
    return (
        <div
            className=" single"
            style={{ background: "#" + hex }}
            onClick={selectPlaceBoard}
        >
            <p className={index > 10 ? "color-white" : ""}>{weight}%</p>
            <p className={index > 10 ? "color-white" : ""}>#{hex}</p>
        </div>
    );
};

export default SingleColor;
