import { useState, useEffect } from 'react'
import { loadPage, loadPhonebooks } from '../actions/contact';
import '../app.css'
import PhoneItem from './PhoneItem'
import { useDispatch, useSelector } from "react-redux";

export default function PhoneList({ UpdateData, Delete, imagePath, keyword, sort }) {
    console.log('masuk phonelist')
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { phonebooks, page, pages } = useSelector(state => state.contact)
    console.log('phonebooks', phonebooks, 'page', page, 'pages', pages)


    const handleScroll = async () => {
        console.log('masuk handlescroll => ')
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
            try {
                if (page < pages) {
                    setIsLoading(true)
                    const newPage = page + 1
                    dispatch(loadPage(newPage))
                }
                else {
                    setIsLoading(false)
                }
                console.log('data DI PHONELIST =>', phonebooks)

            }
            catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [dispatch, pages, page])

    useEffect(() => {
        console.log('ngambil data ')
        const readData = async () => {
            try {
                dispatch(loadPhonebooks({ keyword, sort }))
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        readData()

    }, [dispatch, keyword, sort])
    console.log('data DI PHONELIST =>', phonebooks)


    return (
        <div className="main" id="main-data">
            {!!phonebooks && phonebooks.length > 0 && phonebooks.map((user) => (
                <PhoneItem key={user.id} user={user} remove={Delete} update={UpdateData} imagePath={imagePath} />
            ))}
        </div>
    )

}