import { signInWithEmailAndPassword } from 'firebase/auth';

jest.mock('firebase/auth');

console.log(signInWithEmailAndPassword);
