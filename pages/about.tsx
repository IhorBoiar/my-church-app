import Router from "next/router";
import MainLayout from "../components/MainLayout";

const styles = {
    button: {
        marginRight: '10px',
        cursor: 'pointer'
    }
}

export default function About() {
    return (
    <MainLayout title={'About'}>
        <h1>About Page</h1>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut, ipsum magni nesciunt odit sed sequi vel veniam? Dolor eveniet labore rem? Dignissimos doloribus impedit in laboriosam, repellendus vel voluptatem!</span><span>A eos id pariatur quaerat temporibus? Cum dolorem eaque enim eos ex facere impedit in ipsam iste maiores, modi nam obcaecati porro ratione reiciendis, rem repellat repudiandae sint tempora, temporibus.</span><span>Commodi debitis esse explicabo ipsum itaque molestiae mollitia nam neque nobis, quo repellat similique, velit veritatis? Aliquid beatae, dolore, incidunt iste iure maiores nam odit omnis placeat sapiente similique voluptas!</span><span>Beatae debitis dolorem ea et harum nisi, odio provident. Amet architecto beatae blanditiis consequuntur cupiditate inventore ipsa ipsam iure magni natus nesciunt perferendis, quibusdam quod recusandae tenetur, unde ut voluptates?</span><span>Accusamus aliquid architecto blanditiis ea eaque, error esse et eveniet facere id, ipsam libero magni mollitia neque nesciunt nostrum numquam officiis omnis optio quas repudiandae sapiente sunt suscipit unde veniam.</span></p>
        <button style={styles.button} onClick={() => Router.push('/')}>Go to home page</button>
        <button style={styles.button} onClick={() => Router.push('/posts')}>Go to posts</button>
    </MainLayout>
    )
}