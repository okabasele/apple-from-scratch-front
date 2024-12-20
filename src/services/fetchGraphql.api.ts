type Data = {
    data: any, errors:Array<{
    message: string,
    extensions: {
        code: string,
        exception: {
            stacktrace: Array<string>
        }
    }
}>}

export const fetchGraphQl = async (resolvers: string, variables?:object, token?:string):Promise<any> => { 
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify({
                query: resolvers,
                variables,
            }),
        });
    
        const data: Data = await res.json()

        if (data.errors) {
            throw new Error(data.errors.map((error,id) => `Error ${id+1} : `+error.message).join('\n'));
        }
        return data.data;
        
    } catch (error) {
        throw error;
    }
}