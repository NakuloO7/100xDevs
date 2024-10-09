
import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key : "networkAtom",
    default : 104
})

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 12
})

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
})


export const totalCountSelector = selector({
    key : "totalCountSelector",
    get : ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtommCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);

        return networkAtomCount + jobsAtommCount + notificationAtomCount + messagingAtomCount;
    }
})