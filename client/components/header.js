import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD } from '../redux/reducers/currency'

const Header = () => {
  // const [toggled, toggle] = useState(false)
  const currencyName = useSelector((s) => s.currency.name)
  const dispatch = useDispatch()


  return (
<div className="bg-gray-800"> 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      <div className="flex items-center justify-between h-24"> 
        
        <div className="flex items-center"> 
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </div>
          ban
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">home</a>

                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">basket</a>
            </div>
          </div>
        
        </div>
        <div  className="flex items-center">
          <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">            
                <div className="ml-3 relative text-white">
                  <div className="relative  ">{currencyName}</div>
                  
                  <button type="button" className="relative" onClick={  
                    () => {   
                      dispatch(getCurrencyUSD())
                    }  
                  }>usd</button>  
                  <button type="button" className="relative" onClick={  
                    () => {   
                      dispatch(getCurrencyEUR())
                    }  
                  }>eur</button> 
                  <button type="button" className="relative" onClick={  
                    () => {   
                      dispatch(getCurrencyCAD())
                    }  
                  }>cad</button> 
                  
                </div>
                <div className="ml-10 relative">
                  <div>
                    <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" alt=""/>
                    </button>
                  </div>
                  
                  <div className="origin-top-right absolute right-0 mt-72 w-8 rounded-md shadow-lg py-1 bg-white ring-4 ring-pink-900 ring-opacity-500" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
                <div className="flex flex-col ">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:ring ">sort by</a>
                <a href="#" className="px-3 py-2 rounded-md bg-gray-900 text-sm font-medium text-gray-300 hover:ring-4 hover:ring-pink-300 hover:ring-inset hover:text-white hover:bg-gray-700">up</a>
                
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
</div>
  )
}

export default React.memo(Header)
