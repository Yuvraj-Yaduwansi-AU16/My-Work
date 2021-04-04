import os
import time
from main_code.code import Code
from main_code.folder_names import FolderNames


class ByRecentlyUsed():

    def recentlyUsed(path_of_file):
        os.chdir(path_of_file)
        files = os.listdir(path_of_file)

        for file in files:
            if os.path.isfile(file):
                file_accessed_time_since_epoch = int(os.stat(
                    os.path.join(path_of_file, file)).st_atime)
                current_time = int(time.time())
                recently_accessed_time = current_time - \
                    file_accessed_time_since_epoch
                recently_accessed_time_in_hours = \
                    recently_accessed_time // 3600

                if recently_accessed_time_in_hours <= (24*7):
                    Code.createIfNotExist(
                        FolderNames.folders_for_recently_used[0])
                    Code.move(FolderNames.folders_for_recently_used[0], file)

                elif recently_accessed_time_in_hours <= (24*7*30):
                    Code.createIfNotExist(
                        FolderNames.folders_for_recently_used[1])
                    Code.move(FolderNames.folders_for_recently_used[1], file)

                elif recently_accessed_time_in_hours <= (24*7*30*6):
                    Code.createIfNotExist(
                        FolderNames.folders_for_recently_used[2])
                    Code.move(FolderNames.folders_for_recently_used[2], file)

                elif recently_accessed_time_in_hours > (24*7*30*6):
                    Code.createIfNotExist(
                        FolderNames.folders_for_recently_used[3])
                    Code.move(FolderNames.folders_for_recently_used[3], file)

        for file in files:
            if os.path.isdir(os.path.join(path_of_file, file)) and \
             file not in FolderNames.folders_for_recently_used:
                path = os.path.join(path_of_file, file)
                ByRecentlyUsed.recentlyUsed(path)
                os.chdir(path_of_file)
