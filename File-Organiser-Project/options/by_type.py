import os
from main_code.code import Code
from main_code.folder_names import FolderNames


class ByType(Code):

    def byTypeCode(path_of_file):
        os.chdir(path_of_file)
        files = os.listdir(path_of_file)

        for folders, options in FolderNames.directories.items():
            exists = Code.check(options, files)
            if len(exists) != 0:
                Code.createIfNotExist(folders)
                Code.move(folders, exists)

        for file in files:
            if os.path.isfile(file):
                if file not in FolderNames.my_code_files or \
                     not file.endswith(".pyc"):
                    Code.createIfNotExist("OTHERS")
                    Code.move("OTHERS", file)

        for file in files:
            if os.path.isdir(file):
                if file not in FolderNames.directories.keys() and \
                     file != "OTHERS":
                    paths = os.path.join(path_of_file, file)
                    ByType.byTypeCode(paths)
                    os.chdir(path_of_file)
