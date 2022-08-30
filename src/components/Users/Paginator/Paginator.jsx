import Classes from './Paginator.module.css'
import Preloader from './../../Common/Preloader/Preloader';





const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return (<div className={Classes.pageListBlock}>
        <button onClick={() => { props.onClickMoveGallery('left') }}> Назад </button>
        <div className={Classes.galleryContainer}>
            <div className={Classes.gallery} style={{ marginLeft: props.galleryPosition }}>
                {pagesArray.map(page => {
                    return (
                        <span key={page}
                            className={props.currentPage === page ? Classes.selectedPage : '' + Classes.currentPage}
                            onClick={() => { props.onPageChanged(page) }}>
                            {page}</span>)
                })}
            </div>
        </div>
        <button onClick={() => { props.onClickMoveGallery('right') }}> Вперед </button>
        {props.isFetching ? <Preloader /> : null}

    </div>);
}

export default Paginator;