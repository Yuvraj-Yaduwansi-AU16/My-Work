from options.by_type import ByType
from options.by_size import BySize
from options.by_date_modified import ByDateModified
from options.by_recently_used import ByRecentlyUsed


class Choices:
    def find(option, path_of_file):
        if option == 'Type':
            ByType.byTypeCode(path_of_file)
        elif option == 'Size':
            BySize.bySizeCode(path_of_file)
        elif option == 'Date-Modified':
            ByDateModified.dateModified(path_of_file)
        elif option == 'Recently-Used':
            ByRecentlyUsed.recentlyUsed(path_of_file)
