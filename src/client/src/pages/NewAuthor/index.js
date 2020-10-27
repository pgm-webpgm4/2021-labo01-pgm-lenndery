import React from 'react';
import {useForm} from 'react-hook-form';
import { Page } from '../../layouts';
import mime from 'mime-types';

const NewAuthor = () => {
    const {register, handleSubmit, erros} = useForm();
    
    const onSubmit = async (data) => {
        // const fileData = await handleFiles(data.profilePic);
        // data = {...data, profilePic: await fileData};
        // console.log(data);
        const sendRes = await fetch('http://localhost:5050/authors/create', {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const sendedData = await sendRes.json();
        console.log(data);
        return sendedData;
    }
    
    return (
        <Page>
            <h3 className="mb-4">New author</h3>
            <form action="http://localhost:5050/authors/create" method="POST" encType="multipart/form-data">
                <label>
                    <input type="text" autoComplete="off" className="form-control" name="name" placeholder=" " ref={register}/>
                    <span>Name</span>
                </label>
                <label>
                    <input type="file" className="form-control" name="profilePic" ref={register}/>
                    <span>Picture File</span>
                </label>
                <button className="btn btn-primary" type="submit">Add author</button>
            </form>
        </Page>
    )
}

const handleFiles = (files) => {
    return new Promise((resolve, reject) => {
        const file = files[0];
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            resolve({
                data: e.target.result,
                ext: mime.extension(file.type)
            })  // data <-- in this var you have the file data in Base64 format
        };
        fileReader.onerror = (err) => {
            reject(err)
        }
        // fileReader.readAsDataURL(file)
        fileReader.readAsText(file)
        // fileReader.readAsBinaryString(file)
    })
}

export {NewAuthor};