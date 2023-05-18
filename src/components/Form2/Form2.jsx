import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../Hooks/useTelegram";

const Form2 = () => {
    const [name, setCountry] = useState('');
    const [repos, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const [mail, setMail] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            name,
            repos,
            mail,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [name, repos, mail,subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!name || !repos) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, repos])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    const onChangemail = (e) => {
        setMail(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Отзыв'}
                value={repos}
                onChange={onChangeStreet}
            />
            <input

                className={'input'}
                type="text"
                placeholder={'Почта'}
                value={mail}
                onChange={onChangemail}

            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form2;
