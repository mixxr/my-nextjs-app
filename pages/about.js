export default function About({welcome}) {
    return (
        <>
            <h1>About NextJS</h1>
            <p>{welcome}</p>
        </>
    )
}


// Server side execution 
export async function getStaticProps({ params }) {
    let envvar = process.env.MISE_VAR 
    console.log('====> ENV VAR:', envvar)
    return {
        props: {
            welcome: envvar
        }
    }
}