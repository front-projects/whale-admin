"use client"

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { customStyles } from "../ui/CustomSelect";
import Select from 'react-select'
import { Lottery } from "../Users/types";
import { getLottery, randomLottery } from "@/lib/requests";
import Modal from "../ui/Modal";

export default function Random() {
    const [lottery, setLottery] = useState<Lottery[] | undefined>();
    const [options, setOptions] = useState<any[]>();
    const [modal, setModal] = useState<boolean>();
    const [submited, setSubmited] = useState<any>();

    const [obj, setObj] = useState({
        count: 0,
        max: 0,
        min: 0,
        investModelLevel: 'LEVEL_1'
    });


    useEffect(() => {
        const fetchData = async () => {
            const response = await getLottery();
            if (response) {
                setLottery(response);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const optionsFetched = lottery?.map(el => {
            return { value: el.investModelLevel, label: el.naming }
        })
        setOptions(optionsFetched);
    }, [lottery])

    const handleChange = (option: any) => {
        setObj({
            ...obj,
            investModelLevel: option.value
        });
    }


    const openModal = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setModal(true)
    }

    const submitHandler = async () => {
        const response = await randomLottery(obj);
        if (response) {
            setSubmited(response);
            setObj({
                count: 0,
                max: 0,
                min: 0,
                investModelLevel: 'LEVEL_1'
            })
        } else {
            setModal(false);
            alert("Error, try again later")
        }
    }

    const handleFocus = (key: keyof typeof obj) => {
        if (obj[key] === 0) {
            setObj({ ...obj, [key]: '' }); // Очищуємо поле, якщо значення 0
        }
    }



    return <>
        <Modal show={modal} onClose={() => setModal(false)}>
            {submited ? <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 max-h-[60vh] max-w-[40vw] overflow-y-auto max-sm:max-w-[100vw]">

                    {submited.map((user: any) => <div>{user.username} - {user.incomes[0].transactionAmount.toFixed(2)} $</div>)}</div>
                <Button className="w-1/2 mt-4" onClick={() => setModal(false)}>
                    Ok
                </Button></div>
                : <div className="w-full text-center flex flex-col gap-4">
                    <p>Do you  want to make random prizes?</p>
                    <p>Count - {obj.count} $</p>
                    <p>Min - {obj.min} $ Max - {obj.max} $</p>
                    <p>Level - {obj.investModelLevel}</p>
                    <div className="flex w-full items-center gap-2">

                        <Button className="w-1/2" onClick={submitHandler}>
                            Ok
                        </Button>
                        <div
                            onClick={() => setModal(false)}
                            className="rounded-[8px] p-2 w-1/2 text-center border-2 
cursor-pointer hover:bg-gray-400/20 shadow-xl "
                        >
                            Cancel
                        </div>
                    </div>
                </div>}



        </Modal>
        <div className="border-2 border-gray-500 rounded-xl w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full p-4 mt-4 flex items-center justify-center">
            <form className="flex flex-col gap-2 text-center    " onSubmit={openModal}>
                <label>Count:</label>
                <input type="number" placeholder="Count" value={obj.count} onChange={(e) => setObj({ ...obj, count: +e.target.value })} onFocus={() => handleFocus('count')} />
                <label>Min:</label>
                <input type="number" placeholder="Min" value={obj.min} onChange={(e) => setObj({ ...obj, min: +e.target.value })} onFocus={() => handleFocus('min')} />
                <label>Max:</label>
                <input type="number" placeholder="Max" value={obj.max} onChange={(e) => setObj({ ...obj, max: +e.target.value })} onFocus={() => handleFocus('max')} />
                <Select options={options} styles={customStyles} placeholder="Select level" onChange={handleChange} id='select-for-random' className="mt-4 mb-4" />
                <Button type="submit">Random</Button>
            </form>

        </div>
    </>
}