import { useState } from 'react'
import PhoneList from './PhoneList';
import SearchBar from './SearchBar';


export default function PhoneBox(
    {
        Delete,
        UpdateData,
        isLoading,
        setIsLoading,
    }
) {
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] = useState('asc')
    console.log('masuk phonebox')
    return (
        <>
            <SearchBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort} />
            <PhoneList
                UpdateData={UpdateData}
                Delete={Delete}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                keyword={keyword}
                sort={sort}
            />
        </>
    )
}