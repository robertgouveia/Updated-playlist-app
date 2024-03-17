import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongs, selectAllSongs } from '../features/songs/songSlice';

function Root() {
    const dispatch = useDispatch();
    const allSongs = useSelector(selectAllSongs);

    const handleClick = () => {
        dispatch(searchSongs('your search term here'));
    };

    console.log('Component re-rendered. All songs:', allSongs);

    if (allSongs) {
        return <>{allSongs}</>;
    } else {
        return (
            <>
                <button onClick={handleClick}>Load</button>
            </>
        );
    }
}

export default Root;
