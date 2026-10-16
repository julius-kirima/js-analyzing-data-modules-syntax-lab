
function combineUsers(...arrays) {
  const users = [].concat(...arrays);
  const merge_date = new Date().toLocaleDateString("en-US");

  return {
    users: users,
    merge_date: merge_date
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
