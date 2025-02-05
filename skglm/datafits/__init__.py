from .base import BaseDatafit, BaseMultitaskDatafit
from .single_task import Quadratic, QuadraticSVC, Logistic, Huber, Poisson, Gamma
from .multi_task import QuadraticMultiTask
from .group import QuadraticGroup, LogisticGroup


__all__ = [
    BaseDatafit, BaseMultitaskDatafit,
    Quadratic, QuadraticSVC, Logistic, Huber, Poisson, Gamma,
    QuadraticMultiTask,
    QuadraticGroup, LogisticGroup
]
