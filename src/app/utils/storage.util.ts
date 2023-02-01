export class StorageUtil {

    public static storageSave<T>(key:string, value: T): void{
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    
    public static storageRead<T>(key: string): T | null{
        const storedValue = sessionStorage.getItem(key)
       
        try {
            if (storedValue) {
                return JSON.parse(storedValue)
            }
            
            return null
            
        } catch (error) { //? If the data is invalid it needs to be removed...
            sessionStorage.removeItem(key)
            return null
        }
    }
}

