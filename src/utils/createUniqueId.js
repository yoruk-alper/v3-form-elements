let UUID = 0

export default function createUniqueID () {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}