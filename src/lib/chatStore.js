import { create } from 'zustand'
import { db } from './firebase';
import {doc,getDoc} from 'firebase/firestore'
import { useUserStore } from './userStore';


export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser;

    //check if current user is blocked
    if(user.blocked.includes(currentUser.id)){
      return set({
        chatId: null,
        user:null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      })
    }
    //check if receiver is blocked
    else if(currentUser.blocked.includes(user.id)){
      return set({
        chatId: null,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      })
    }
    else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      })
    }
    
  },
  

  changeBlock: ()=>{
    set(state =>({...state,isReceiverBlocked: !isReceiverBlocked}))
  }
}));