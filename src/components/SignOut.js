function SignOut({ auth }) {
    return auth.currentUser && (
      <button className="bg-red-500 px-4 my-4 rounded-sm font-bold text-white" onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;