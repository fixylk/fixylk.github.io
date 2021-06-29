import React, {Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import BlogContent from "./BlogContent";
import SidebarForBlog from "../SidebarForBlog";

const BlogPage = ({sidebar_position,blog_type,sidebar}) => {
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={'From Businex Latest'}
                content={'Transform new ideas into innovative products and services that can compete across both local and global markets.'}
            />

            <PageWrapper classes={'blog-page-content-area sp-y'}>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <BlogContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogPage;