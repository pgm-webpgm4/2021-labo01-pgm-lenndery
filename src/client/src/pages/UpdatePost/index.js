import React, { useState, useEffect, setState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Page} from '../../layouts';
import { AuthorsSelect } from '../../components';

const UpdatePost = ({match: {params}}) => {
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }
    
    const [post, updatePost] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:5050/blog/${params.id}`);
            const data = await resp.json();
            updatePost(data);
            console.log(data);
        }
        fetchData();
    }, [])
    
    return (
        <Page>
            <h3 className="mb-4">Update post</h3>
             <form action={`http://localhost:5050/blog/update/${params.id}`} method="post">
                <div className="row">
                    <div className="col">
                        <label>
                            <span>Title</span>
                            <input type="text" autoComplete="off" className="form-control" name="title" defaultValue={post.title} placeholder=" "/>
                        </label>
                        <label className="h-100">
                            {/* <span>Content</span> */}
                            {/* <textarea name="description" className="form-control h-100" defaultValue={post.description}></textarea> */}
                            <Editor
                                initialValue={post.description}
                                textareaName='description'
                                apiKey='7kk8r447f3yjkyy6f51wtv94sf2v8cj8j3en0zmh68b7zi4m'
                                init={{
                                    height: 400,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help'
                                }}
                                onEditorChange={handleEditorChange}
                            />
                        </label>
                    </div>
                    <div className="col-3">
                        <label>
                            <span>Author</span>
                            <AuthorsSelect selected={post.author}/>
                        </label>
                        <label>
                            <span>Intro</span>
                            <textarea name="intro" className="form-control" defaultValue={post.intro}></textarea>
                        </label>
                        
                        <button className="btn btn-primary w-100 justify-content-center" type="submit">Update post</button>
                    </div>
                </div>
                
                
            </form>
        </Page>
    )
}

export { UpdatePost };