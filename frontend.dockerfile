ARG NODE_Major=22

FROM node:${NODE_Major}-alpine

ARG USERNAME="node"
ARG USER_HOME="/home/$USERNAME"

RUN apk update && \
    apk upgrade && \
    apk add --no-cache  curl \
                        git \
                        make \
                        ncurses \
                        python3 \
                        vim \
                        wget \
                        zsh \
                        zsh-vcs

USER "${USERNAME}"

RUN sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)" --unattended && \
    cd ~/.oh-my-zsh/custom/plugins && \
    git clone https://github.com/zdharma-continuum/history-search-multi-word.git

COPY ./.vimrc_no_py "${USER_HOME}/.vimrc"
COPY .zshrc "${USER_HOME}/.zshrc"

RUN vim -E -s -u "${USER_HOME}/.vimrc" +PlugInstall +qall

# Dev
EXPOSE 80
# Preview
EXPOSE 4173

WORKDIR "${USER_HOME}/app"

CMD ["yarn", "dev"]
