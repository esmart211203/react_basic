import { useState } from "react"

export const Task8 = () => {
    const [body, setBody] = useState("...");
    const [author, setAuThor] = useState("...");
    const handleChangeBody = (event) => {
        setBody(event.target.value);
    }
    const handleChangeAuthor = (event) => {
        setAuThor(event.target.value);
    }
    return (
        <>
            <div className="container bg-info">
                <form className="pt-3 pb-5" >
                    <h3 className="text-center">Form create Post</h3>
                    <div className="mb-3">
                        <label className="form-label">Body</label>
                        <input type="text" onChange={handleChangeBody} className="form-control" placeholder="enter body" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">author</label>
                        <input type="text" onChange={handleChangeAuthor} className="form-control" placeholder="enter author" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="text-center bg-success">
                    <h5>Thong tin</h5>
                    <div>Body: {body}</div>
                    <div>Author: {author}</div>
                </div>
            </div>
        </>
    )
}