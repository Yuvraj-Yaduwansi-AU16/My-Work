import os


class Code:
    def createIfNotExist(folder):
        if not os.path.exists(folder):
            os.makedirs(folder)

    def move(folderName, files):
        if type(files) is list:
            for file in files:
                os.replace(file, f"{folderName}/{file}")
        else:
            os.replace(files, f"{folderName}/{files}")

    def check(fileList, files):
        exists = [
            file for file in files if os.path.splitext(file)[1].lower() in
            fileList]
        return exists
