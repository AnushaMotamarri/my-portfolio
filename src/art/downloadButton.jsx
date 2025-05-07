import GetAppIcon from '@mui/icons-material/GetApp';
import React from 'react'
import axios from 'axios';


function DownloadButton({selectedDoc, wrapperClassName}) {
    function download(source){
    axios(source,
    {
        method:'GET',
        responseType:'blob'
    })
        .then((response) => {
            let blob=response.data;
            const downloadAnchor = document.createElement('a');
            const url = URL.createObjectURL(blob);
            downloadAnchor.href = url;
            downloadAnchor.download = `freebie.png`;
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            document.body.removeChild(downloadAnchor);
        }, (error) => {
            console.log(error);
        });
        }

    return (
        <div className={wrapperClassName?wrapperClassName:"like-btn-wrap"} >
        <div className="like-button" onClick={(e)=>e.stopPropagation()}>
            <a id="tagID" download>
              
            <GetAppIcon className="unfavorite" onClick={()=>download(selectedDoc.imageUrl)}/>
            </a>
        </div>
    </div>
    )
}

export default DownloadButton
