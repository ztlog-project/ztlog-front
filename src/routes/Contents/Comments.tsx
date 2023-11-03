import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <Giscus
        id='comments'
        repo="zoetrope56/devlog-comments"
        repoId="R_kgDOKnxXWg"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="ko"
        loading='lazy'
        />
    );
}