export const HOME_PAGE_ROUTE = '/'
export const HOME_PAGE_ROUTE_MANAGEMENT = '/home'
export const COLLECTION_PAGE_ROUTE = '/galerie'
export const INFORMATION_PAGE_ROUTE = '/informations'
export const CONTACT_PAGE_ROUTE = '/contact'
export const ADMIN_PAGE_ROUTE = '/admin'
export const NOT_FOUND_PAGE_ROUTE = '/404'

export const homePageEndpointRoute = (num) => `/home/${num || ':num'}`