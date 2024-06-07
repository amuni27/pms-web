import React, {useState} from 'react';
import HeartIcon from "../../SvgIcon/HeartIcon";
import ShareIcon from "../../SvgIcon/ShareIcon";
import useAuth from "../../network/useAuth";
import {useProperties} from "../../custom_hooks/useProperties";
import {createByIdWithExtraResourceWithExtraId} from "../../network/NetworkCall";
import HeartIconRed from "../../SvgIcon/HeartIconRed";

const TopPropertyTitle = ({title}) => {
    const property = useProperties();
    const {user, logged} = useAuth()
    const [like, setLike] = useState(false);
    const id = localStorage.getItem('userid')

    const likeClicked = (() => {
        createByIdWithExtraResourceWithExtraId('user', id, 'mylist', property.id).then(data => {
            console.log(data)
            setLike(true)
        }).catch(err => {
            console.log(err)
            setLike(false)
        })
    })
    return (
        <div className="w-2/3 bg-transparent  pb-7 flex items-center justify-between">
            <h1 className="text-4xl">{title}</h1>
            <div className="flex items-center">
                <button className="flex items-center mr-4">
                    <ShareIcon/>
                    <span>Share</span>
                </button>
                <button className="flex items-center" onClick={() => {
                    if (logged) {
                        likeClicked();
                        console.log(user)
                    } else alert("First you should login")
                }}>
                    {like ? (
                        <>
                            <HeartIconRed className="h-6 w-6 p-0.5 mr-1"/>
                            <span>Saved</span>
                        </>
                    ) : (
                        <>
                            <HeartIcon className="h-6 w-6 p-0.5 mr-1"/>
                            <span>Save</span>
                        </>)}

                </button>
            </div>
        </div>
    );
};

export default TopPropertyTitle;
