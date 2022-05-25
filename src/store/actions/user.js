export const handleSelectUserComunity = (comunity) => {
  return (dispatch, getState) => {

    let status = comunity?.idStatus || null;
    let permission = comunity?.idMemberProfile || 4;
    let isFollowed = (status == 1);
    
    dispatch({
      type: "USER_SELECT",
      payload: { 
        status,
        permission,
        isFollowed,
      }
    });
  };
};
