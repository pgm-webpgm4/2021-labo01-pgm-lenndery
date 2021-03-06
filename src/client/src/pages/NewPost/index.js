import React, {useState, useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Page } from '../../layouts';
import './index.scss';
import { AuthorsSelect } from '../../components';

const NewPost = () => {
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:5050/authors');
            const data = await resp.json();
            setAuthors(data);
        }
        fetchData()
    }, [])
    
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }
    
    return (
        <Page>    
            <h3 className="mb-4">New post</h3>
            <form action="http://localhost:5050/blog/create" method="post" target="_self">
                <div className="row">
                    <div className="col">
                        <label>
                            <span>Title</span>
                            <input type="text" autoComplete="off" className="form-control" name="title" placeholder=" "/>
                        </label>
                        <label className="h-100">
                            {/* <span>Content</span> */}
                            {/* <textarea name="description" className="form-control h-100"></textarea> */}
                            <Editor
                                initialValue="<p>This is the initial content of the editor</p>"
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
                            <AuthorsSelect/>
                        </label>
                        <label>
                            <span>Intro</span>
                            <textarea name="intro" className="form-control"></textarea>
                        </label>
                        
                        <button className="btn btn-primary w-100 justify-content-center" type="submit">Create post</button>
                    </div>
                </div>
                
                
            </form>
        </Page>
    )
}

export {NewPost}