'use client'
import { Loader, withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import '@aws-amplify/ui-react/styles.css'

const SignUp = ({ user }: { user?: AuthUser }) => {
    console.log(user)
    useEffect(() => {
        if (user) {
            redirect('/admin')
        }
    }, [user])
    return <Loader className="w-[5rem] h-[5rem] flex justify-center items-center" />
};

export default withAuthenticator(SignUp, { signUpAttributes: ['email', 'name', 'picture', 'profile',], variation: 'default' });