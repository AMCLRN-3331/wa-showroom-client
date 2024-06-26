import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const {auto} = useContext(Context);
    const pageCount = Math.ceil(auto.totalCount / auto.limit);
    console.log(auto.limit)
    const pages = [];

    for (let i = 0; i < pageCount; i++){
        pages.push(i + 1);
    }

    return(

        <Pagination className="mt-5 pagination-filter">
            
            {pages.map(page => <Pagination.Item key={page} active={auto.page === page} onClick={() => auto.setPage(page)}>{page}</Pagination.Item>)}
        </Pagination>
    );
});

export default Pages;